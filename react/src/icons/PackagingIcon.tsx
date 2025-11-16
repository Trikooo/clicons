import React from 'react';
import config from '../config';

interface PackagingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PackagingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/packaging)
 * @see {@link https://clicons.dev/icon/packaging}
 */
const PackagingIcon = React.forwardRef<SVGSVGElement, PackagingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 22C17.5 22 17 20 17 17C17 11.4 18.3333 4.66667 19 2C19.6667 5 21 12 21 16C21 17.2201 20.8139 18.6264 20.6688 19.5375C20.5717 20.147 20.1771 20.6614 19.6251 20.9375L17.5 22ZM17.5 22H5.06155C4.14382 22 3.35065 21.3726 3.22748 20.4631C3.11042 19.5988 3 18.4098 3 17C3 11 5 5 5 5'
    }
  ],
  [
    'path',
    {
      d: 'M5.78077 2H19C18.9041 2.38357 18.7944 2.85129 18.6769 3.38767C18.4722 4.32192 17.6532 5 16.6967 5H4.34317C4.51028 4.14637 4.67313 3.38764 4.8181 2.75918C4.92124 2.31206 5.3219 2 5.78077 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.02139 18.0739C6.00778 17.7328 6 17.3742 6 17C6 15.3484 6.11597 13.5983 6.29662 11.8829C6.34969 11.379 6.77722 11 7.28398 11H13.27C13.8689 11 14.3328 11.5229 14.2722 12.1187C14.1056 13.7583 14 15.424 14 17C14 17.3197 14.0057 17.628 14.0158 17.9238C14.0358 18.5052 13.5784 19 12.9966 19H7.00227C6.47904 19 6.04226 18.5967 6.02139 18.0739Z'
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

PackagingIcon.displayName = 'PackagingIcon';
export default PackagingIcon;
