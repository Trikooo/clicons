import React from 'react';
import config from '../config';

interface AiInnovationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiInnovationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-innovation)
 * @see {@link https://clicons.dev/icon/ai-innovation}
 */
const AiInnovationIcon = React.forwardRef<SVGSVGElement, AiInnovationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 2C6.58172 2 3 5.54539 3 9.91886C3 11.4118 3.41735 12.8082 4.14286 14'
    }
  ],
  [
    'path',
    {
      d: 'M17 5H15C14.0572 5 13.5858 5 13.2929 5.29289C13 5.58579 13 6.05719 13 7V9C13 9.94281 13 10.4142 13.2929 10.7071C13.5858 11 14.0572 11 15 11H17C17.9428 11 18.4142 11 18.7071 10.7071C19 10.4142 19 9.94281 19 9V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 11V13M17.5 11V13M14.5 3V5M17.5 3V5M13 6.5H11M13 9.5H11M21 6.5H19M21 9.5H19'
    }
  ],
  [
    'path',
    {
      d: 'M6.38287 17.0982C6.291 16.8216 6.24507 16.6833 6.25042 16.5713C6.26174 16.3343 6.41114 16.1262 6.63157 16.0405C6.73579 16 6.88105 16 7.17157 16H14.8284C15.119 16 15.2642 16 15.3684 16.0405C15.5889 16.1262 15.7383 16.3343 15.7496 16.5713C15.7549 16.6833 15.709 16.8216 15.6171 17.0982C15.4473 17.6094 15.3624 17.8651 15.2315 18.072C14.9572 18.5056 14.5272 18.8167 14.0306 18.9408C13.7935 19 13.525 19 12.9881 19H9.01186C8.47495 19 8.2065 19 7.96944 18.9408C7.47283 18.8167 7.04281 18.5056 6.7685 18.072C6.63755 17.8651 6.55266 17.6094 6.38287 17.0982Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 19L13.8707 19.6466C13.7293 20.3537 13.6586 20.7072 13.5001 20.9866C13.2552 21.4185 12.8582 21.7439 12.3866 21.8994C12.0816 22 11.7211 22 11 22C10.2789 22 9.91842 22 9.61338 21.8994C9.14175 21.7439 8.74484 21.4185 8.49987 20.9866C8.34144 20.7072 8.27073 20.3537 8.12932 19.6466L8 19'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AiInnovationIcon.displayName = 'AiInnovationIcon';
export default AiInnovationIcon;
