import React from 'react';
import config from '../config';

interface AddressBookIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AddressBookIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/address-book)
 * @see {@link https://clicons.dev/icon/address-book}
 */
const AddressBookIcon = React.forwardRef<SVGSVGElement, AddressBookIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.25 10.0002V12.5002C15.25 13.3286 15.9216 14.0002 16.75 14.0002C17.5784 14.0002 18.25 13.3286 18.25 12.5002V12C18.25 9.23858 16.0114 7 13.25 7C10.4886 7 8.25 9.23858 8.25 12C8.25 14.7614 10.4886 17 13.25 17C14.3758 17 15.4147 16.6279 16.2505 16M15.25 12.0002C15.25 13.1048 14.3546 14.0002 13.25 14.0002C12.1454 14.0002 11.25 13.1048 11.25 12.0002C11.25 10.8956 12.1454 10.0002 13.25 10.0002C14.3546 10.0002 15.25 10.8956 15.25 12.0002Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 6L2 6M4.5 12L2 12M4.5 18H2'
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

AddressBookIcon.displayName = 'AddressBookIcon';
export default AddressBookIcon;
