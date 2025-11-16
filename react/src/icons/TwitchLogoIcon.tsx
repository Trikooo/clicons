import React from 'react';
import config from '../config';

interface TwitchLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name TwitchLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/twitch-logo)
 * @see {@link https://clicons.dev/icon/twitch-logo}
 */
const TwitchLogoIcon = React.forwardRef<SVGSVGElement, TwitchLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 5.75h-1v3h1v-3Zm-3.75 0h1v3h-1v-3Z'
    }
  ],
  [
    'path',
    {
      fillRule: 'evenodd',
      d: 'm6.5 3-2.5 2.5v9h3v2.5l2.5-2.5h2l4.5-4.5v-7h-9.5Zm8.5 6.5-2 2h-2l-1.75 1.75v-1.75h-2.25v-7.5h8v5.5Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

TwitchLogoIcon.displayName = 'TwitchLogoIcon';
export default TwitchLogoIcon;
