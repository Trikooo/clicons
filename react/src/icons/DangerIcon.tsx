import React from 'react';
import config from '../config';

interface DangerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DangerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/danger)
 * @see {@link https://clicons.dev/icon/danger}
 */
const DangerIcon = React.forwardRef<SVGSVGElement, DangerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5 11.25C10.5 10.2835 9.7165 9.5 8.75 9.5C7.7835 9.5 7 10.2835 7 11.25C7 12.2165 7.7835 13 8.75 13C9.7165 13 10.5 12.2165 10.5 11.25Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 11.25C17 10.2835 16.2165 9.5 15.25 9.5C14.2835 9.5 13.5 10.2835 13.5 11.25C13.5 12.2165 14.2835 13 15.25 13C16.2165 13 17 12.2165 17 11.25Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 16L11.2929 15.6306C11.6262 15.2102 11.7929 15 12 15C12.2071 15 12.3738 15.2102 12.7071 15.6306L13 16'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V18.9929C6.15625 19.6422 6.46621 20.2619 7.02648 20.5901C10.2351 22.47 13.7649 22.47 16.9735 20.5901C17.5338 20.2619 17.8438 19.6422 17.8438 18.9929V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 21.5V20'
    }
  ],
  [
    'path',
    {
      d: 'M10 21.5V20'
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

DangerIcon.displayName = 'DangerIcon';
export default DangerIcon;
