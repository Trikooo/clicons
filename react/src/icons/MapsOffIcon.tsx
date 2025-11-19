import React from 'react';
import config from '../config';

interface MapsOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MapsOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/maps-off)
 * @see {@link https://clicons.dev/icon/maps-off}
 */
const MapsOffIcon = React.forwardRef<SVGSVGElement, MapsOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.5 4.5C3.73931 4.94127 2.72098 5.45609 2.27164 6.24482C2 6.72165 2 7.30232 2 8.46367V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.1298 21 19.9211 21 20.5 20.8712'
    }
  ],
  [
    'path',
    {
      d: 'M22 17.9876V10.1657C22 8.22611 22 7.25631 21.4142 6.65374C20.8284 6.05118 19.8856 6.05118 18 6.05118H15.9214C15.004 6.05118 14.9964 6.0494 14.1715 5.63658L10.8399 3.96938C9.44885 3.2733 8.75329 2.92523 8.01236 2.94942C7.64015 2.96157 7.28518 3.06672 6.85352 3.26792M15 5.99585V11.0001'
    }
  ],
  [
    'path',
    {
      d: 'M14.9998 15.0093V20.9379M8.01953 8.14258L8.01953 17.9197'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
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

MapsOffIcon.displayName = 'MapsOffIcon';
export default MapsOffIcon;
