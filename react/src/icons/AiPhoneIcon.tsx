import React from 'react';
import config from '../config';

interface AiPhoneIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiPhoneIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-phone)
 * @see {@link https://clicons.dev/icon/ai-phone}
 */
const AiPhoneIcon = React.forwardRef<SVGSVGElement, AiPhoneIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 14.9996C17 18.2996 17 19.9496 16.0481 20.9748C15.0962 22 13.5641 22 10.5 22C7.43587 22 5.90381 22 4.9519 20.9748C4 19.9496 4 18.2996 4 14.9996V8.99919C4 5.69916 4 4.04914 4.9519 3.02395C5.80236 2.10801 7.11592 2.0104 9.57143 2'
    }
  ],
  [
    'path',
    {
      d: 'M16 4H14C13.0572 4 12.5858 4 12.2929 4.29289C12 4.58579 12 5.05719 12 6V8C12 8.94281 12 9.41421 12.2929 9.70711C12.5858 10 13.0572 10 14 10H16C16.9428 10 17.4142 10 17.7071 9.70711C18 9.41421 18 8.94281 18 8V6C18 5.05719 18 4.58579 17.7071 4.29289C17.4142 4 16.9428 4 16 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 10V12M16.5 10V12M13.5 2V4M16.5 2V4M12 5.5H10M12 8.5H10M20 5.5H18M20 8.5H18'
    }
  ],
  [
    'path',
    {
      d: 'M10.49 19H10.499'
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

AiPhoneIcon.displayName = 'AiPhoneIcon';
export default AiPhoneIcon;
